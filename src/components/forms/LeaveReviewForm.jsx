import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { db } from '../../firebase/firebase';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';

function LeaveReviewForm({ onClose }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'comments'), orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(fetchedComments);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      author: '',
      comment: '',
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const newComment = {
          author: values.author,
          comment: values.comment,
          timestamp: new Date().getTime(),
        };

        const docRef = await addDoc(collection(db, 'comments'), newComment);
        console.log('Comment added to Firebase Firestore');

        setComments((prevComments) => [
          { id: docRef.id, ...newComment },
          ...prevComments,
        ]);

        resetForm();
        handleClose();
        toast.success('Comment added. Thank you!');
      } catch (error) {
        console.error('Error adding comment to Firebase Firestore:', error);
        throw new Error('Something went wrong');
      }
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
          <img className="inline" src="/icons/ui/deleteBtn.svg" alt="delete" />
        </button>
      </div>
    </form>
  );
}

export default LeaveReviewForm;
