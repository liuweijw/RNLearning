//
//  ToolClass.m
//  和商汇
//
//  Created by gavin on 16/6/24.
//  Copyright © 2016年 gavin. All rights reserved.
//

#import "ToolClass.h"
#import "MBProgressHUD.h"


@implementation ToolClass


+(void)showMessage:(NSString *)messageStr
{
  dispatch_async(dispatch_get_global_queue(QOS_CLASS_USER_INITIATED, 0), ^{
    dispatch_async(dispatch_get_main_queue(), ^{
      UIWindow *window = [UIApplication sharedApplication].keyWindow;
      MBProgressHUD *hud = [MBProgressHUD showHUDAddedTo:window animated:YES];
      // Set the text mode to show only text.
      hud.mode = MBProgressHUDModeText;
      hud.bezelView.backgroundColor = [UIColor blackColor];
      hud.contentColor = [UIColor whiteColor];
      hud.bezelView.style =  MBProgressHUDBackgroundStyleBlur;
      hud.detailsLabel.text= messageStr;
      hud.detailsLabel.font = [UIFont systemFontOfSize:16];
      //            hud.offset = CGPointMake(0.f, 40);
      hud.userInteractionEnabled = NO;
      [hud hideAnimated:YES afterDelay:3.f];
    });
  });
  
}
@end
