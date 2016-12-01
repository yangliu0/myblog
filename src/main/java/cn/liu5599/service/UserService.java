package cn.liu5599.service;

/**
 * Created by liuyang on 2016/9/26.
 */
import cn.liu5599.pojo.User;

public interface UserService
{
    public User getUserById(int userid);
    public int regUser(User user);
    public User getUserByUsername(String username);
}
