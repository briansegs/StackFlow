"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params: any) {
  console.log("Entering function getUserById with params:", params);
  try {
    await connectToDatabase();
    console.log("Connected to database.");

    const { userId } = params;

    console.log("Finding user with id:", userId);
    const user = await User.findOne({ clerkId: userId });

    console.log("Found and returning user:", user);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  console.log("Entering function createUser with userData:", userData);
  try {
    await connectToDatabase();
    console.log("Connected to database.");

    console.log("creating user with userData:", userData);
    const newUser = await User.create(userData);

    console.log("Created and returning newUser:", newUser);
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  console.log("Entering function updateUser with params:", params);
  try {
    await connectToDatabase();
    console.log("Connected to database.");

    const { clerkId, updateData, path } = params;

    console.log("Finding and updating user with data:", {
      clerkId,
      updateData,
      path,
    });
    await User.findByIdAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    console.log("User updated. revalidating Path:", path);
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUser(params: DeleteUserParams) {
  console.log("Entering function deleteUser with params:", params);
  try {
    await connectToDatabase();
    console.log("Connected to database.");

    const { clerkId } = params;

    console.log("Deleting user with clerkId:", clerkId);
    const user = await User.findByIdAndDelete({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    // delete user from database
    // and questions, answers, comments, etc.

    // get user question ids
    // const userQuestionIds = await Question.find({ author: user._id }).distinct(
    //   "_id"
    // );

    // delete user questions
    console.log("Deleting user Questions with author:", { author: user._id });
    await Question.deleteMany({ author: user._id });

    // TODO: delete user answers, comments, etc.
    console.log("Deleting user with id:", user._id);
    const deletedUser = await User.findByIdAndDelete(user._id);

    console.log("User deleted. Returning deletedUser:", deleteUser);
    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
