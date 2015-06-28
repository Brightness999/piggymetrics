package com.piggymetrics.service.interfaces;

import com.piggymetrics.domain.User;

import javax.servlet.http.HttpServletRequest;

public interface UserServiceInterface {

    public User getUser(String username, HttpServletRequest request);

    public User getDemoUser(HttpServletRequest request);

    public void saveChanges(User user, HttpServletRequest request);

    public void addUser(User user, HttpServletRequest request);
}
