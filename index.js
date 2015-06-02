module.exports.encoding = 'utf-8';

module.exports.variables = [
    {
        name: 'name',
        desc: 'Project name',
        required: true,
    },
    {
        name: 'version',
        desc: 'Project version',
        defaults: '1.0.0'
    },
    {
        name: 'description',
        desc: 'Project description',
        required: false,
    }
];

module.exports.run = function(config, done) {
    done(null);
};
