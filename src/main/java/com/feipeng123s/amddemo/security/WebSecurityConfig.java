//package com.feipeng123s.amddemo.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.builders.WebSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;

//@Configuration
//@EnableWebSecurity
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//
//    @Bean
//    public AjaxAuthenticationSuccessHandler ajaxAuthenticationSuccessHandler() {
//        return new AjaxAuthenticationSuccessHandler();
//    }
//
//    @Bean
//    public AjaxAuthenticationFailureHandler ajaxAuthenticationFailureHandler() {
//        return new AjaxAuthenticationFailureHandler();
//    }
//
//    @Bean
//    public AjaxLogoutSuccessHandler ajaxLogoutSuccessHandler() {
//        return new AjaxLogoutSuccessHandler();
//    }
//
//    @Bean
//    public Http401UnauthorizedEntryPoint http401UnauthorizedEntryPoint() {
//        return new Http401UnauthorizedEntryPoint();
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//            .authorizeRequests()
//            .antMatchers("/").permitAll()
//            .antMatchers("/").permitAll()
//            .anyRequest().authenticated()
//            .and()
//            .formLogin()
//            .loginPage("/#/login")
//            .loginProcessingUrl("/user/login")
//            .usernameParameter("username")
//            .passwordParameter("password")
//            .successHandler(ajaxAuthenticationSuccessHandler())
//            .failureHandler(ajaxAuthenticationFailureHandler())
////            .defaultSuccessUrl("/#/hello")
//            .permitAll()
//            .and()
//            .logout()
//            .logoutUrl("/user/logout")
//            .logoutSuccessHandler(ajaxLogoutSuccessHandler())
//            .permitAll()
//            .and()
//            .csrf().disable()
//            .exceptionHandling()
//            .authenticationEntryPoint(http401UnauthorizedEntryPoint());
//    }
//
//    @Override
//    public void configure(WebSecurity web) throws Exception{
//        web.ignoring().antMatchers("/**/*.{html,css,js}");
//    }
//
//    /**
//     * 添加自定义用户
//     **/
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.inMemoryAuthentication().passwordEncoder(NoOpPasswordEncoder.getInstance())
//            .withUser("admin").password("123").roles("ADMIN");
//    }
//}
