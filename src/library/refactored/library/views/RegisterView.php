<?php
/**
 * Created by PhpStorm.
 * User: zoerobertson
 * Date: 6/15/18
 * Time: 2:50 PM
 */

namespace Views;


class RegisterView extends BaseView
{
    const REGISTER_STYLES = ['registration'];
    const REGISTER_SCRIPTS = ['register', 'nav-bar'];

    public function __construct()
    {
        $this->setTitle('Register!');
        $this->setStyles(self::REGISTER_STYLES);
        $this->setUniqueScripts(self::REGISTER_SCRIPTS);
        $this->setTemplate('register-page');
    }
}