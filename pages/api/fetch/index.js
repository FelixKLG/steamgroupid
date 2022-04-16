export default async function Fetch(req, res) {
    res.status(200).json({
        status: '200',
        message: 'add group slug to /api/fetch/:slug/ to get group id'
    });
}