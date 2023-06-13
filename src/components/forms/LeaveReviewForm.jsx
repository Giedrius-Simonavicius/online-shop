import React from 'react';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { comments } from '../../data/data';
import toast from 'react-hot-toast';

function LeaveReviewForm({ onClose }) {
  const formik = useFormik({
    initialValues: {
      author: '',
      comment: '',
      id: uuidv4(),
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      postComment(values, setSubmitting);
      resetForm();
      handleClose();
      toast.success('Comment added. Thank you!');
    },
    validate: (values) => {
      const errors = {};

      if (!values.author) {
        errors.author = 'Name is required';
      }

      if (!values.comment) {
        errors.comment = 'Comment is required';
      }

      return errors;
    },
  });

  function postComment(commentValuesObj) {
    const newComment = {
      author: commentValuesObj.author,
      comment: commentValuesObj.comment,
      id: commentValuesObj.id,
    };
    comments.unshift(newComment);
    console.log('comments ===', comments);
  }
  const handleClose = () => {
    onClose();
  };
  return (
    <form
      className="my-10 mr-6 min-w-[40vw] rounded-2xl bg-color1 p-10 text-sm"
      onSubmit={formik.handleSubmit}
    >
      <div className="w-full">
        <div>
          <label htmlFor="author">
            Your name <span className=" text-color8">*</span>
          </label>
        </div>
        <div>
          <input
            className=" mt-2 w-full rounded border-2 py-2 pl-4 font-normal  placeholder:font-light"
            type="text"
            id="author"
            name="author"
            placeholder="Your name"
            value={formik.values.author}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.author && formik.errors.author ? (
          <div>{formik.errors.author}</div>
        ) : null}
      </div>
      <div className="mt-6">
        <div>
          <label htmlFor="comment">
            Your comment <span className="text-color8">*</span>
          </label>
        </div>
        <div>
          <textarea
            cols="30"
            rows="10"
            className="mt-2 w-full resize-none rounded border-2 pl-4 pt-4 font-normal  placeholder:font-light"
            id="comment"
            name="comment"
            placeholder="Your comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>
      {formik.touched.comment && formik.errors.comment ? (
        <div>{formik.errors.comment}</div>
      ) : null}
      <div className="flex justify-between">
        <button
          className="mt-4 rounded-full
           border-2 border-color3 bg-color3 px-12 py-2 font-normal text-white duration-200 hover:border-2 hover:bg-color1 hover:text-color3"
          type="submit"
        >
          Post
        </button>
        <button
          className="mt-4 rounded-full px-12 py-2 font-normal duration-200 hover:text-color8"
          onClick={handleClose}
        >
          Close{' '}
          <img
            className="inline"
            src="../../../public/icons/ui/deleteBtn.svg"
            alt="delete"
          />
        </button>
      </div>
    </form>
  );
}

export default LeaveReviewForm;
