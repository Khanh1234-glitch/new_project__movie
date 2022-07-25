import { createStyles } from "@mantine/core";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegistered } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import {createRegister} from './../../slices/register'
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { useForm } from "react-hook-form";

const useStyle = createStyles(() => ({
  container__register: {
    padding: "32px",
    background:
      "url(https://tcdtist-tix-clone.vercel.app/static/media/backapp.b46ef3a1.jpg)",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  form__register: {
    width: "500px",
    backgroundColor: "white",
    transform: "translateX(60vh)",
    marginTop: "15vh !important",
    padding: "50px !important",
    borderRadius: "30px",
  },
}));

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
interface valuesregister {
  taiKhoan: string;
  email: string;
  matKhau: string;
}
const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentUser, isLoading, error } = useSelector(
    (state: RootState) => state.register
  );
  const { register, handleSubmit } = useForm<valuesregister>({
    defaultValues: { email: "", taiKhoan: "", matKhau: "" },
  });
  // const taiKhoan = register("taiKhoan");
  // console.log(taiKhoan);
  const [form] = Form.useForm();
  const { classes, cx } = useStyle();

  const onFinish = (values:valuesregister) => {
    dispatch(createRegister(values))
    
  };

  return (
    <div>
      <div className={classes.container__register}>
        <Form
          className={classes.form__register}
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <div className="header__form">
            <div
              className="logo"
              style={{
                textAlign: "center",
                fontSize: "30px",
                color: "#fb4226",
              }}
            >
              <FaRegistered />
              <p style={{ fontWeight: "bold", color: "black" }}>Đăng kí</p>
            </div>
          </div>
          <Form.Item
            name="account"
            label="Tài khoản"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Tài khoản không được để trống!",
                whitespace: true,
              },
              {
                pattern:/^[A-Za-z]+$/,
                message:"Tài khoản không được chứa khoảng cách hoặc kí tự đặc biệt và số"
              }
            ]}
          >
            <Input {...register("taiKhoan")}/>
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "Không đúng cú pháp email!",
              },
              {
                required: true,
                message: "Email không được để trống!",
              },
            ]}
          >
            <Input {...register("email")}/>
          </Form.Item>

          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[
              {
                required: true,
                message: "Mật khẩu không được để trống!",
              },
            ]}
            hasFeedback
          >
            <Input.Password {...register("matKhau")}/>
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Xác nhận mật khẩu"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Nhập lại mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "Mật khẩu không trùng !"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password {...register("matKhau")}/>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              Đồng ý với các <a href="">điều khoản</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button
              disabled={isLoading}
              style={{
                width: "100%",
                backgroundColor: "#fb4226",
                border: "none",
              }}
              type="primary"
              htmlType="submit"
            >
              Register
            </Button>
          </Form.Item>
          <Link to="/sign__in">Bạn đã có tài khoản ? Đăng nhập ngay</Link>
        </Form>
      </div>
    </div>
  );
};

export default Register;
