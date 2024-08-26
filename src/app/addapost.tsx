import React, { useState } from 'react';
import { Modal, Fade, Box, Backdrop, Button, TextareaAutosize, TextField } from '@mui/material';

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type PostType = {
    postName: string;
    postImage: string | null;
    postDescription: string;
    postLikes: number | "";
};

export default function AddAPost() {
    const [open, setOpen] = useState(false);
    const [postName, setPostName] = useState("");
    const [postImageBase64, setPostImageBase64] = useState<string | null>(null);
    const [postDescription, setPostDescription] = useState("");
    const [postLikes, setPostLikes] = useState<number | "">("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addPostFunction = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const postObj: PostType = {
            postName,
            postImage: postImageBase64,
            postDescription,
            postLikes: postLikes === "" ? 0 : Number(postLikes),
        };

        const existingPosts = localStorage.getItem("userPosts");
        const currentPosts = existingPosts ? JSON.parse(existingPosts) : [];
        currentPosts.push(postObj);
        localStorage.setItem("userPosts", JSON.stringify(currentPosts));

        resetForm();
        handleClose();
    };

    const resetForm = () => {
        setPostName("");
        setPostImageBase64(null);
        setPostDescription("");
        setPostLikes("");
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            const reader = new FileReader();
            reader.onloadend = () => setPostImageBase64(reader.result as string);
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div>
            <button onClick={handleOpen} className="border-[green] text-white border px-5 py-1">
                Add a Post
            </button>

            <Modal
                aria-labelledby="add-post-modal"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <form className='flex flex-col gap-5' onSubmit={addPostFunction}>
                            <TextField
                                required
                                label="Post Name"
                                variant="outlined"
                                value={postName}
                                onChange={e => setPostName(e.target.value)}
                            />
                            <TextareaAutosize
                                required
                                minRows={2}
                                placeholder="Post Description..."
                                className='border border-2'
                                value={postDescription}
                                onChange={e => setPostDescription(e.target.value)}
                            />
                            <TextField
                                required
                                type='file'
                                onChange={handleImageChange}
                            />
                            <TextField
                                required
                                type='number'
                                label="Likes"
                                variant="outlined"
                                value={postLikes}
                                onChange={e => setPostLikes(e.target.value)}
                            />
                            <Button type='submit' variant="contained">
                                Done
                            </Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

