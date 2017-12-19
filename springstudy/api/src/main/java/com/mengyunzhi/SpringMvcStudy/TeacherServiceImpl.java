package com.mengyunzhi.SpringMvcStudy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 教师
 * @author poshichao
 */
@Service
public class TeacherServiceImpl implements TeacherService {
    @Autowired
    private TeacherRepository teacherRepository;
    /**
     * 更新实体
     * @param id        被更新的实体ID
     * @param newTeacher   要更新的内容
     * poshichao
     */
    @Override
    public void update(Long id, Teacher newTeacher) {
        // 获取数据表中保存的实体
        Teacher oldTeacher = teacherRepository.findOne(id);

        // 依次地更新各个字段
        oldTeacher.setName(newTeacher.getName());
        oldTeacher.setUsername(newTeacher.getUsername());
        oldTeacher.setSex(newTeacher.getSex());
        oldTeacher.setEmail(newTeacher.getEmail());

        // 更新数据表
        teacherRepository.save(oldTeacher);
    }

    @Override
    public void delete(Long id) {
        teacherRepository.delete(id);
    }
}
