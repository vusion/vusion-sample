module.exports = {
    name: 'vukoa',
    keys: ['na87g0k345'],
    db: {
        host: process.env.db_host,
        database: process.env.db_database,
        user: process.env.db_user,
        password: process.env.db_password,
    },
    auth: {
        exclude: [
            '/',
            '/favicon.ico',
            '/login',
        ],
    },
    excludePath: [
        '/public/(.*)',
        '/test/(.*)',
        '/__webpack_hmr',
        '/sockjs-node/(.*)',
        '/assets/(.*)',
        '/inner/(.*)',
        '/logout',
        '/favicon.ico',
    ],
    excludeModule: [
        '/',
        '/main',
    ],
};
