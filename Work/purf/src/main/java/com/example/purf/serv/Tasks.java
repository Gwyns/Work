package com.example.purf.serv;

import javax.persistence.*;

@Entity
@Table(name = "tasks")

public class Tasks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "idtask")
    private int idtask;

    @Column(name = "task")
    private String task;

    public int getIdtask() {
        return idtask;
    }

    public void setIdtask(int idtask) {
        this.idtask = idtask;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }
}