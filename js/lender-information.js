/**
 * Created by wxq on 2016/9/16.
 */
$(function () {
    $('.classify-container').css('height',$('.show-detail-container').css('height'));

    $('.change-password').on('click', function () {
        layer.open({
            type: 1,
            content: ' <input type="text" placeholder="输入旧密码"/><input type="text" placeholder="输入新密码：6-16位密码，需包含字母及数字"/>',
            title:'修改密码',
             skin:'information-layer',
            btn:'确认修改',
            yes: function (index ,layero) {
                /*点击确定执行的回调*/
            }
        });
    });
    $('.change-tel').on('click', function () {
        layer.open({
            type:1,
            content:'<input type="text" placeholder="输入新的手机号" class/> <div class="verification-box"> <input type="text" placeholder="输入验证码" class="verification-img-input"/> <img src="../image/vertication-img.png" alt="" class="vertication-img"/></div> <div class="verification-message-box"><input type="text" placeholder="输入短信中的验证码"class="vertication-message-input"/> <button class="vertication-message-btn">发送验证码</button> </div>',
            title:'手机号变更',
            btn:['更新手机号','下次登录可以用新手机号登录'],
            skin:'information-tel-mail',
            yes: function (index,layero) {
                /*点击修改的回调*/
            }
        })
    });
    $('.bind-mail').on('click', function () {
        layer.open({
            type:1,
            content:'<input type="text" placeholder="输入您的邮箱地址" class/> <div class="verification-box"> <input type="text" placeholder="输入验证码" class="verification-img-input"/> <img src="../image/vertication-img.png" alt="" class="vertication-img"/></div> <div class="verification-message-box"><input type="text" placeholder="输入邮箱中的验证码"class="vertication-message-input"/> <button class="vertication-message-btn">发送验证码</button> </div>',
            title:'邮箱绑定',
            btn:['绑定邮箱信息','下次登录可以用新的邮箱地址登录'],
            skin:'information-tel-mail',
            yes: function (index,layero) {
                /*点击修改的回调*/
            }
        })
    });
    $('.bind-invitation').on('click', function () {
        layer.open({
            type:1,
            content:'<div class="invater-box"> <span>邀请人：</span> <input type="text" placeholder="请输入邀请人用户名"/> </div>',
            title:'绑定邀请人',
            btn:'确认绑定',
            skin:'information-bind-invite',
            yes: function (index,layero) {


            }
        })
    })
})