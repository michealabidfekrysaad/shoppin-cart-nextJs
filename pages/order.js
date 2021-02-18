import { useFormik } from "formik";
import { resetCart } from "../store/actions/Cart";
import * as Yup from "yup";
import Input from "../component/Input/Input";
import Btn from "../component/Btn/Btn";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import styles from "../styles/Order.module.css";
import Head from "next/head";


const Order = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const initialValues = {
    address: "",
    phoneNumber: "",
    email: "",
  };
  const validationSchema = Yup.object({
    address: Yup.string().required("Required"),
    phoneNumber: Yup.string()
      .required("Required")
      .test(
        "len",
        "Must be exactly 10 characters",
        (val) => val && val.length === 10
      ),
    email: Yup.string().email("Must be valid E-mail").required("Required"),
  });
  const onSubmit = (values, onSubmitProps) => {
    alert("action submitted");
    onSubmitProps.resetForm();
    dispatch(resetCart());
    router.push("/");
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <Head>
        <title>Order</title>
      </Head>
      <div className={styles.container}>
        <form onSubmit={formik.handleSubmit} noValidate>
          <div className={styles.row}>
            <div className={styles.col25}>
              <label htmlFor="address">Address</label>
            </div>
            <div className={styles.col75}>
              <Input
                type="text"
                id="address"
                name="address"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.address}
              />
              {formik.errors.address && formik.touched.address && (
                <div className={styles.errMessage}>{formik.errors.address}</div>
              )}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col25}>
              <label htmlFor="phoneNumber">Phone Number</label>
            </div>
            <div className={styles.col75}>
              <Input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
              />
              {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                <div className={styles.errMessage}>
                  {formik.errors.phoneNumber}
                </div>
              )}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col25}>
              <label htmlFor="email">E-mail</label>
            </div>
            <div className={styles.col75}>
              <Input
                type="email"
                id="email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && (
                <div className={styles.errMessage}>{formik.errors.email}</div>
              )}
            </div>
          </div>
          <div className={styles.row}>
            <Btn
              type="submit"
              isDisabled={!(formik.isValid && formik.dirty)}
              className={
                !(formik.isValid && formik.dirty)
                  ? `${styles.disabledBtn}`
                  : `${styles.buttonAppear}`
              }
              content="Submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Order;
