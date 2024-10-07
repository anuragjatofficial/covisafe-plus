package com.covisafe.utils;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.cors.CorsConfiguration;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.constraints.NotNull;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JWTAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	private JwtService jwtService;

	@Autowired
	private UserDetailsService userDetailsService;

	@Override
	protected void doFilterInternal(
			@NotNull HttpServletRequest request,
			@NotNull HttpServletResponse response,
			@NotNull FilterChain filterChain)
			throws ServletException, IOException {

		final String authHeader = request.getHeader(SecurityDetails.HEADER);
		final String jwt;
		final String username;

		// check for valid header
		log.info("once per request executed ");

		if (authHeader == null || !authHeader.startsWith("Bearer ")) {
			filterChain.doFilter(request, response);
			return;
		}

		// extracting jwt header

		jwt = authHeader.substring(7);
		username = jwtService.extractUsername(jwt);
		log.info(jwt);

		// if user is not authenticated an username is also not null

		if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
			UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);

			// if token is valid

			if (jwtService.isTokenValid(jwt, userDetails)) {
				log.info("validation logic executed");
				UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
						username,
						null,
						userDetails.getAuthorities());

				log.info(authToken.toString());
				authToken.setDetails(
						new WebAuthenticationDetailsSource()
								.buildDetails(request));

				SecurityContextHolder.getContext().setAuthentication(authToken);

			}

		}

		filterChain.doFilter(request, response);

	}

	// @Override
	// protected boolean shouldNotFilter(HttpServletRequest request) throws
	// ServletException {
	// return (request.getServletPath().equals("/swagger"));
	// }

	// @Override
	// public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
	// 	CorsConfiguration cfg = new CorsConfiguration();
	// 	cfg.addAllowedOrigin("*"); // For all origins
	// 	cfg.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
	// 	cfg.setAllowCredentials(true);
	// 	cfg.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
	// 	cfg.setExposedHeaders(Collections.singletonList("Authorization"));
	// 	return cfg;
	// }

}
