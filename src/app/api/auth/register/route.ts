import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb";

export async function POST(request: NextRequest) {
	const body = await request.json();
	try {
		const { email, name, password, role } = body;

		const userExists = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (userExists) {
			throw new Error("Esta cuenta ya existe");
		}

		const userRole = role || "USER";
		const fetchRole = await prisma.role.findFirst({
			where: {
				name: userRole,
			},
		});

		if (!fetchRole) {
			throw new Error("El rol no existe");
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = {
			email,
			name,
			password: hashedPassword,
			role: {
				connect: {
					id: fetchRole.id,
				},
			},
		};

		const user = await prisma.user.create({
			data: newUser,
		});

		return NextResponse.json(user, { status: 201 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error: "error intente más tarde" },
			{ status: 400 }
		);
	}
}
