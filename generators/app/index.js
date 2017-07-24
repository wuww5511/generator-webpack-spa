const Generator = require('yeoman-generator')

class AppGenerator extends Generator {
    constructor (args, opts) {
        super(args, opts)
        this._opts = {}
    }

    initializing () {

    }

    prompting () {
        return this.prompt(
            [
                {
                    type: 'input',
                    name: 'appname',
                    message: 'project name',
                    default: 'app'
                },
                {
                    type: 'confirm',
                    name: 'useRem',
                    message: 'do you need to use rem?',
                    default: 'app'
                }
            ]
        ).then(answers => {
            Object.assign(this._opts, answers)
        })
    }

    configuring () {
        this.fs.copy(
            this.templatePath('base/.babelrc'),
            this.destinationPath('.babelrc')
        )
    }

    writing () {
        this.fs.copyTpl(
            this.templatePath('base'),
            this.destinationPath(),
            this._opts
        )
        this.fs.copy(
            this.templatePath('binary'),
            this.destinationPath()
        )
    }

    conflicts () {

    }

    install () {

    }

    end () {

    }
}

module.exports = AppGenerator