package com.github.liuweijw.rnlearning;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.github.liuweijw.rnlearning.rnmodule.RnToast;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * rn inject modules
 *
 * Created by liuweijw on 2018/5/3.
 */

public class MyReactPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new RnToast(reactContext));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
