class baseEvent {
    constructor(client, options) {
        this.client = client
        this.name = options.name
    }
}

export default baseEvent