/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"
#import "MainPageViewController.h"



@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.window= [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
   CGRect rect = [[UIScreen mainScreen] bounds];
  MainPageViewController * rootView = [[MainPageViewController alloc] initWithNibName:@"MainPageViewController" bundle:nil];
  rootView.view.frame= rect;
  UINavigationController *navViewController = [[UINavigationController alloc] initWithRootViewController:rootView];
  
//  [navViewController setNavigationBarHidden:YES];
  self.window.rootViewController = navViewController;
  [self.window makeKeyAndVisible];

  return YES;
}

@end
