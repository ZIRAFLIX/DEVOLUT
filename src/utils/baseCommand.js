class baseCommand {
    constructor(client, options) {
        this.client = client
        this.name = options.name
        this.description = options.description
        this.type = options.type
        this.options = options.options
    }
}

export default baseCommand