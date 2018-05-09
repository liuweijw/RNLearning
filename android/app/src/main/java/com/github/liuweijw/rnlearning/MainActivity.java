package com.github.liuweijw.rnlearning;

import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.shell.MainReactPackage;

import javax.annotation.Nullable;

public class MainActivity extends ReactActivity implements DefaultHardwareBackBtnHandler {

    private String routerType = "1";
    private static final String RN_MODULE_NAME = "RNLearning";

    public static void lunch(Context context, String routerType){
        context.startActivity(new Intent(context,MainActivity.class).putExtra("routerType",routerType));
    }

    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;
    private LifecycleState mLifecycleState = LifecycleState.BEFORE_RESUME;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (!Settings.canDrawOverlays(this)) {
                Intent serviceIntent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION);
                startActivity(serviceIntent);
            }
        }

        // Android 传值 RN 接收并且做不同的页面跳转
        this.routerType = getIntent().getStringExtra("routerType");

        setContentView(R.layout.activity_react_view);
        mReactRootView = findViewById(R.id.react_root);
        // 第二种方式初始化ReactRootView
        // mReactRootView = new ReactRootView(this);
        // ....
        // setContentView(mReactRootView);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setCurrentActivity(this)
                .setBundleAssetName("index.android.bundle")
                .setJSMainModulePath("index.android")
                .addPackage(new MainReactPackage())
                .addPackage(new MyReactPackage())
                .setInitialLifecycleState(mLifecycleState)
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .build();
        Bundle bundle = new Bundle();
        bundle.putString("routerType", this.routerType);
        mReactRootView.startReactApplication(mReactInstanceManager,RN_MODULE_NAME,bundle);

        // 模拟 Android 主动向ReactJs 发送消息
        /*new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                final ReactContext reactContext = mReactInstanceManager.getCurrentReactContext();
                WritableMap params = Arguments.createMap();
                params.putString("key","1");
                sendEvent(reactContext, "keyboardWillShow", params);
            }
        }, 1000);*/
    }

    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }

    @Override
    protected void onPause() {
        super.onPause();
        mLifecycleState = LifecycleState.BEFORE_RESUME;
        if (mReactInstanceManager != null)
            mReactInstanceManager.onHostPause(this);
    }

    @Override
    protected void onResume() {
        super.onResume();
        mLifecycleState = LifecycleState.RESUMED;
        if (mReactInstanceManager != null)
            mReactInstanceManager.onHostResume(this, this);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mReactRootView.unmountReactApplication();
        mReactRootView = null;
        if (mReactInstanceManager != null)
            mReactInstanceManager.destroy();
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (mReactInstanceManager != null)
             mReactInstanceManager.onActivityResult(this,requestCode, resultCode, data);
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null){
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }
}
