package com.mengyunzhi.SpringMvcStudy.service;

import com.mengyunzhi.SpringMvcStudy.repository.Klass;
import com.mengyunzhi.SpringMvcStudy.repository.KlassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author poshichao
 * 班级
 */
@Service
public class KlassServiceImpl implements KlassService {
    @Autowired
    private KlassRepository klassRepository;    // 班级

    @Override
    public Klass save(Klass klass) {
        return klassRepository.save(klass);
    }

    @Override
    public Iterable<Klass> getAll() {
        return klassRepository.findAll();
    }

    @Override
    public Klass getById(Long id) {
        return klassRepository.findOne(id);
    }

    @Override
    public void updateByIdAndKlass(Long id, Klass newKlass) {
        // 有一个班级信息
        Klass oldKlass = klassRepository.findOne(id);

        // 用newKlass来更新这个班级信息
        if (oldKlass != null) {
            oldKlass.setName(newKlass.getName());
            oldKlass.setTeacher(newKlass.getTeacher());
            klassRepository.save(oldKlass);
        }
    }


}
