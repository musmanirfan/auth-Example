import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { TextareaAutosize, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AddAPost() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [postName, setPostName] = useState("");
    const [postImage, setPostImage] = useState<File | null>(null);
    const [postImageBase64, setPostImageBase64] = useState<string | null>(null);
    const [postDescription, setpostDescription] = useState("");
    const [postLikes, setPostLikes] = useState<number | "">("");

    const addPostFunction = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(postName, postImageBase64, postDescription, postLikes);

        type postObjType = {
            postName: string;
            postImage: string | null;
            postDescription: string;
            postLikes: number | string;
        }

        const postObj: postObjType = {
            postName,
            postImage: postImageBase64,
            postDescription,
            postLikes
        }

        const existingPosts = localStorage.getItem("userPosts")
        if (existingPosts) {
            let currentArr = JSON.parse(existingPosts)
            currentArr?.push(postObj)
            localStorage.setItem("userPosts", JSON.stringify(currentArr))
            return
            // alert("")
        } else {
            let tempArr = []
            tempArr.push(postObj)
            localStorage.setItem("userPosts", JSON.stringify(tempArr))
            tempArr = []
        }

        setPostName("");
        setPostImage(null);
        setPostImageBase64(null);
        setpostDescription("");
        setPostLikes("");
        handleClose();
        // const existingPosts = JSON.parse(localStorage.getItem("userPosts") || "[]");
        // existingPosts.push(postObj);

        // localStorage.setItem("userPosts", JSON.stringify(existingPosts));

    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setPostImage(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPostImageBase64(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <button onClick={handleOpen} className="border-[green] text-white border border-solid px-5 py-1">Add a Post</button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
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
                            <TextField className='w-[100%]' required id="outlined-basic" label="Post Name" variant="outlined" onChange={e => setPostName(e.target.value)} />
                            <TextareaAutosize required minRows={2} minLength={2} placeholder="Post Description..." className='border border-2 w-[100%]' onChange={e => setpostDescription(e.target.value)} />
                            <TextField required type='file' onChange={handleImageChange} />
                            <TextField className='w-[100%]' required type='number' id="outlined-basic" label="Likes" variant="outlined" onChange={e => setPostLikes(e.target.value)} />
                            {/* {postImageBase64 && <img src={postImageBase64} alt="Post Preview" />} */}
                            <Button className='w-[100%]' type='submit' variant="contained">Done</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}