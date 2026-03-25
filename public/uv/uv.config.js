// This file overwrites the stock UV config.js

self.__uv$config = {
	prefix: "/uv/service/",
    /* 👇 THIS IS THE PART YOU NEED TO ADD 👇 */
    bare: "https://proxy-backend-jf48.onrender.com//bare/", 
	encodeUrl: Ultraviolet.codec.xor.encode,
	decodeUrl: Ultraviolet.codec.xor.decode,
	handler: "/uv/uv.handler.js",
	client: "/uv/uv.client.js",
	bundle: "/uv/uv.bundle.js",
	config: "/uv/uv.config.js",
	sw: "/uv/uv.sw.js",
};
