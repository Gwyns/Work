package com.example.purf.serv;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "vremia")

public class Vremia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "idvremia")
    private int idvremia;

    @Column(name = "start")
    private Timestamp start;

    @Column(name = "stop")
    private Timestamp stop;

    @Column(name = "tasks_idtask")
    private int tasks_idtask;


    public int getIdvremia() {
        return idvremia;
    }

    public void setIdvremia(int idvremia) {
        this.idvremia = idvremia;
    }

    public Timestamp getStart() {
        return start;
    }

    public void setStart(Timestamp start) {
        this.start = start;
    }

    public Timestamp getStop() {
        return stop;
    }

    public void setStop(Timestamp stop) {
        this.stop = stop;
    }

    public int getTasks_idtask() {
        return tasks_idtask;
    }

    public void setTasks_idtask(int tasks_idtask) {
        this.tasks_idtask = tasks_idtask;
    }
}