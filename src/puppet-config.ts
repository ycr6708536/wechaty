/**
 * Wechaty Official Puppet Implementations List
 */
export const PUPPET_DEPENDENCIES = {
  'default'                  : '0.0.0',    // will be replaced with PUPPET_DEFAULT
  'mock'                     : '0.0.0',    // compatible with v0.18, will be replaced with wechaty-puppet-padchat
  'padchat'                  : '0.0.0',    // compatible with v0.18, will be replaced with wechaty-puppet-padchat
  'padpro'                   : '0.0.0',

  /**************************************************************
   * The Above is Alias for the following full NPM module names *
   **************************************************************/

  // 'wechaty-puppet-hostie'    : '^0.0.1',
  'wechaty-puppet-ioscat'    : '^0.5.19',   // https://www.npmjs.com/package/wechaty-puppet-ioscat
  'wechaty-puppet-mock'      : '^0.15.5',   // https://www.npmjs.com/package/wechaty-puppet-mock
  'wechaty-puppet-padchat'   : '^0.18.1',   // https://www.npmjs.com/package/wechaty-puppet-padchat
  'wechaty-puppet-padpro'    : '^0.3.7',    // https://www.npmjs.com/package/wechaty-puppet-padpro
  'wechaty-puppet-puppeteer' : '^0.17.22',   // https://www.npmjs.com/package/wechaty-puppet-puppeteer
  'wechaty-puppet-wechat4u'  : '^0.14.1',   // https://www.npmjs.com/package/wechaty-puppet-wechat4u
}

export type PuppetModuleName = keyof typeof PUPPET_DEPENDENCIES

export const PUPPET_NAME_DEFAULT: PuppetModuleName = 'wechaty-puppet-puppeteer'
