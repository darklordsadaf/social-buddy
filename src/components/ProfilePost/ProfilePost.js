import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const ProfilePost = (props) => {
    const [edit, setEdit] = useState(false);
    const classes = useStyles();
    const { title, body, id, userId } = props.post;
    const postStyle = {
        border: '1px solid white',
        margin: '20px 20px 20px 50px',
        padding: '20px',
        borderRadius: '20px',
        width: '400px',
        height: '290px',
        alignItems: 'center',
        boxShadow: '10px 10px 50px gray'


    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        setEdit(false)
        data.id = id;
        data.userId = userId;
        props.handleUpdate(data);
    };
    return (
        <div >


            {
                edit ?
                    <div className="text-center mt-5">
                        <h4><b>Update Post</b></h4>
                        <hr />
                        <div className="d-flex justify-content-center">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <label><b>Title</b></label>
                                <br />
                                <input style={{ height: '60px', width: '350px' }} defaultValue={title} placeholder="Title" {...register("title")} />
                                <br />
                                <br />
                                {/* include validation with required or other standard HTML validation rules */}
                                <label><b>Description</b></label>
                                <br />
                                <input placeholder="Description..." defaultValue={body} style={{ height: '200px', paddingBottom: '150px', width: '350px' }} required {...register("body")} />
                                {/* errors will return when field validation fails  */}
                                {errors.exampleRequired && <p>This field is required</p>}
                                <br />
                                <br />
                                <div className="text-center">
                                    <button className="px-5 mb-4 btn btn-warning" variant="primary " type="submit">
                                        <b>Update</b>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                    : <Card style={postStyle} className={classes.root}>
                        <CardContent>

                            <Typography variant="h6" component="h2">
                                {title}
                            </Typography>

                            <Typography variant="body2" component="p">
                                {body}...
                    </Typography>

                        </CardContent>
                        <CardActions>
                            <button onClick={() => {
                                setEdit(true);
                                props.handleChange(true);
                            }} className="btn btn-primary">Update</button>
                            <button onClick={() => props.handleDelete(id)} className="btn btn-danger">Delete</button>
                        </CardActions>
                    </Card>
            }
        </div>
    );
};

export default ProfilePost;