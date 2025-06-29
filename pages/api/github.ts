import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: process.env.gh
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = await octokit.request('GET /users/{username}/repos', {
        username: 'FujaTyping',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    res.status(200).json(data.data)
}