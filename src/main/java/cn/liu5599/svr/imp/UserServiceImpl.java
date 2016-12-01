package cn.liu5599.svr.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.liu5599.service.UserService;
import cn.liu5599.pojo.User;
import cn.liu5599.dao.UserMapper;

@Service
public class UserServiceImpl implements UserService
{
    @Autowired(required=false)
    private UserMapper userDao = null;

    public User getUserById(int userId)
    {
        return this.userDao.selectByPrimaryKey(userId);
    }

    public int regUser(User user)
    {
        return this.userDao.insertSelective(user);
    }

    public User getUserByUsername(String username)
    {
        return this.userDao.selectByUsername(username);
    }
}
