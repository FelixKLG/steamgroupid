import axios from "axios";
import xml2js from "xml2js";

export default async function handler(req, res) {
    try {
        const { gid } = await req.query

        if (!gid || !gid.match(/[a-z]/i)) {
            res.status(400).json({
                status: 400,
                error: 'Bad Request'
            });
            return;
        }

        const url = `https://steamcommunity.com/groups/${gid}/memberslistxml/?xml=1&start=0&count=1`;

        const response = await axios.get(url);

        try {
            const responseJSON = await xml2js.parseStringPromise(response.data);

            const gid64 = await responseJSON.memberList.groupID64[0];

            res.status(200).json({status: 200, groupId: gid64});
        } catch {
            res.status(404).json({
                status: 404,
                error: 'Not Found'
            });
        }
    } catch {
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error'
        })
    }
}
