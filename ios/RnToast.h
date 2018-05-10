//
//  RnToast.h
//  RNLearning
//
//  Created by gavin on 2018/5/9.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>
#import <React/RCTEventDispatcher.h>

@interface RnToast : NSObject<RCTBridgeModule>

-(void)notice;
@end
