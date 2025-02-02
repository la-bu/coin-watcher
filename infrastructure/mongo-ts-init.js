db = db.getSiblingDB("cryptoDb");
db.createUser({
    user: "user",
    pwd: "pwd",
    roles: [{role: "dbOwner", db: "cryptoDb"}]
});
db.createCollection(
    "cryptoDb",
    {
        timeseries: {
            timeField: "timestamp",
            metaField: "metadata",
            granularity: "seconds"
        }
    }
);