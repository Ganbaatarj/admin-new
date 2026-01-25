<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CategoryController extends Controller
{
    public function index(): Response
    {
        return response()->json(Category::query()->latest()->get());
    }

    public function store(Request $request): Response
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'status' => ['required', 'in:draft,published']
        ]);

        return response()->json(Category::create($data), 201);
    }

    public function show(Category $category): Response
    {
        return response()->json($category);
    }

    public function update(Request $request, Category $category): Response
    {
        $data = $request->validate([
            'name' => ['sometimes', 'required', 'string', 'max:120'],
            'status' => ['sometimes', 'required', 'in:draft,published']
        ]);

        $category->update($data);

        return response()->json($category);
    }

    public function destroy(Category $category): Response
    {
        $category->delete();

        return response()->json(null, 204);
    }
}
