//
//  MainPageViewController.h
//  RNLearning
//
//  Created by gavin on 2018/5/9.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>

@interface MainPageViewController : UIViewController<RCTBridgeModule>

- (IBAction)pageviewClick:(id)sender;

@end
