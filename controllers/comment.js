import Comment from '../models/Comment.js';


const addComment = (input, ctx) => {
    try {
        const comment = new Comment({
            publication: input.publication,
            comment: input.comment,
            user: ctx.user.id
        });

        comment.save();
        return comment;

    } catch (error) {
        console.log(error);
    }
}

const getComments = async idPublication => {
    try {
        const comments = await Comment.find({ publication: idPublication }).populate('user');
        return comments;
    } catch (error) {
        console.log(error);
    }
}

export default {
    addComment,
    getComments
}