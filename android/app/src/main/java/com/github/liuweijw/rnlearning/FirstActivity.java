package com.github.liuweijw.rnlearning;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

/**
 * Created by liuweijw on 2018/5/3.
 */

public class FirstActivity extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_first);

        Button toPageBtn = findViewById(R.id.to_rn_page);
        toPageBtn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                MainActivity.lunch(FirstActivity.this, "0");
            }
        });

        Button toPageBtn1 = findViewById(R.id.to_rn_page_first);
        toPageBtn1.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                MainActivity.lunch(FirstActivity.this, "1");
            }
        });

        Button toPage1Btn = findViewById(R.id.to_rn_page_orther);
        toPage1Btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                MainActivity.lunch(FirstActivity.this, "2");
            }
        });
    }
}
