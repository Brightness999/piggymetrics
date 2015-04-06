package com.piggymetrics.service.interfaces;

import com.piggymetrics.model.User;
import org.springframework.context.MessageSource;

import javax.servlet.http.HttpServletRequest;

public interface UserServiceInterface {

    public User getUser(String username, HttpServletRequest request);

    public User getDemoUser(HttpServletRequest request);

    public void saveChanges(String username, User user);

    public void addUser(User user, HttpServletRequest request);
}
