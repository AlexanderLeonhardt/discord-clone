const generateUsers = (amount: number) => {
    const users = [];
    for (let i = 0; i < amount; i++) {
        const statusList = ["online", "offline", "idle", "dnd"]
        const status = statusList[Math.floor(Math.random() * statusList.length)];
        users.push(
            {
                id: Math.floor(Math.random() * 99999),
                status: status
            }
        );
    }
    return users;
};

export { generateUsers };