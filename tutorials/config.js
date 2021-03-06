export const configs = [
  {
    name: 'us',
    data: {
      DEFAULTCONFIGNAME: '@kandy-io/link-config-us',
      DEFAULTCONFIGACCESS: 'Kandy.support.us.config',
      DEFAULTCONFIGURL: 'https://unpkg.com/@kandy-io/link-config-us@1.1.0/dist/index.umd.js',
      SUBSCRIPTIONFQDN: 'spidr-ucc.genband.com',
      WEBSOCKETFQDN: 'spidr-ucc.genband.com',
      KANDYTURN1: 'turns:turn-ucc-1.genband.com:443?transport=tcp',
      KANDYSTUN1: 'stun:turn-ucc-1.genband.com:3478?transport=udp',
      KANDYTURN2: 'turns:turn-ucc-2.genband.com:443?transport=tcp',
      KANDYSTUN2: 'stun:turn-ucc-2.genband.com:3478?transport=udp'
    }
  },
  {
    name: 'emea',
    data: {
      DEFAULTCONFIGNAME: '@kandy-io/link-config-emea',
      DEFAULTCONFIGACCESS: 'Kandy.support.emea.config',
      DEFAULTCONFIGURL: 'https://unpkg.com/@kandy-io/link-config-emea@1.1.0/dist/index.umd.js',
      SUBSCRIPTIONFQDN: 'spidr-em.genband.com',
      WEBSOCKETFQDN: 'spidr-em.genband.com',
      KANDYTURN1: 'turns:turn-em-1.genband.com:443?transport=tcp',
      KANDYSTUN1: 'stun:turn-em-1.genband.com:3478?transport=udp',
      KANDYTURN2: 'turns:turn-em-2.genband.com:443?transport=tcp',
      KANDYSTUN2: 'stun:turn-em-2.genband.com:3478?transport=udp'
    }
  },
  {
    name: 'uae',
    data: {
      DEFAULTCONFIGNAME: '@kandy-io/link-config-uae',
      DEFAULTCONFIGACCESS: 'Kandy.support.uae.config',
      DEFAULTCONFIGURL: 'https://unpkg.com/@kandy-io/link-config-uae@1.1.0/dist/index.umd.js',
      SUBSCRIPTIONFQDN: 'ct-webrtc.etisalat.ae',
      WEBSOCKETFQDN: 'ct-webrtc.etisalat.ae',
      KANDYTURN1: 'turns:ct-turn1.etisalat.ae:443?transport=tcp',
      KANDYSTUN1: 'stun:ct-turn1.etisalat.ae:3478?transport=udp',
      KANDYTURN2: 'turns:ct-turn2.etisalat.ae:443?transport=tcp',
      KANDYSTUN2: 'stun:ct-turn2.etisalat.ae:3478?transport=udp'
    }
  }
]
