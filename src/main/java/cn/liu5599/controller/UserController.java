package cn.liu5599.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import com.alibaba.fastjson.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import cn.liu5599.pojo.User;
import cn.liu5599.service.UserService;
import org.springframework.web.bind.support.SessionStatus;


@Controller
@RequestMapping("/user")
@SessionAttributes("LoginUser")
public class UserController
{
    @Resource
    private UserService userService;

    // 注册
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

    // 登录
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject login(Model model, @RequestParam("username_l") String username, @RequestParam("password_l") String password)
    {
        User user;
        //当ret=1时，代表没有此用户
        //当ret=0时，登录成功
        //当ret=2时，密码错误
        int ret;
        JSONObject json = new JSONObject();
        user = this.userService.getUserByUsername(username);
        if(user == null)
        {
            json.put("ret", 1);
        }

        String psword = user.getPassword();

        if(password.equals(psword))
        {
            user.setPassword("");
            // 添加session信息
            model.addAttribute("LoginUser", user);
            json.put("ret", 0);
        }
        else
        {
            json.put("ret", 2);
        }
        return json;
    }

    // 检查是否登录
    @RequestMapping(value = "/checkout", method = RequestMethod.POST)
    @ResponseBody
    public User checkout(HttpServletRequest req)
    {
        User user = (User)req.getSession().getAttribute("LoginUser");
        if(user == null)
        {
            //返回一个空User，代表session中没有登录用户
            return new User();
        }
        else
        {
            return user;
        }
    }

    // 注销
    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    @ResponseBody
    public String logout(SessionStatus sessionStatus)
    {
        sessionStatus.setComplete();
        return "success";
    }

    //获取用户
    @RequestMapping(value = "/showUser", method = RequestMethod.POST)
    @ResponseBody
    public User showUser(@RequestParam("id") String id)
    {
        User user = this.userService.getUserById(Integer.parseInt(id));
        user.setPassword("");
        return user;
    }
}
