package cn.liu5599.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import cn.liu5599.pojo.User;
import cn.liu5599.service.UserService;


@Controller
@RequestMapping("/user")
public class UserController
{
    @Resource
    private UserService userService;

    @RequestMapping(value = "/reg", method = RequestMethod.POST)
    public @ResponseBody JSONObject reg(@RequestParam("username") String username, @RequestParam("password") String password)
    {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        JSONObject json = new JSONObject();
        json.put("ret", this.userService.regUser(user));
        return json;
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public int login(@RequestParam("username_l") String username, @RequestParam("password_l") String password, HttpSession httpSession)
    {
        User user;
        //当ret=1时，代表没有此用户
        //当ret=0时，登录成功
        //当ret=2时，密码错误
        int ret;
        user = this.userService.getUserByUsername(username);
        if(user == null)
        {
            return 1;
        }

        String psword = user.getPassword();

        if(password.equals(psword))
        {
            user.setPassword("");
            httpSession.setAttribute("LoginUser", user);
            ret = 0;
        }
        else
        {
            ret = 2;
        }
        return ret;
    }
}
