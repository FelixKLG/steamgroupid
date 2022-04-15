export default async function Fetch(req, res) {
    res.status(200).json({
        message: 'add group slug to /api/fetch/:slug/ to get group id'
    });
}