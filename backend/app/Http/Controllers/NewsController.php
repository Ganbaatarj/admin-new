<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class NewsController extends Controller
{
    public function index(): Response
    {
        return response()->json(News::query()->latest()->get());
    }

    public function store(Request $request): Response
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'status' => ['required', 'in:draft,published'],
            'category_id' => ['nullable', 'integer'],
            'published_at' => ['nullable', 'date']
        ]);

        return response()->json(News::create($data), 201);
    }

    public function show(News $news): Response
    {
        return response()->json($news);
    }

    public function update(Request $request, News $news): Response
    {
        $data = $request->validate([
            'title' => ['sometimes', 'required', 'string', 'max:255'],
            'status' => ['sometimes', 'required', 'in:draft,published'],
            'category_id' => ['nullable', 'integer'],
            'published_at' => ['nullable', 'date']
        ]);

        $news->update($data);

        return response()->json($news);
    }

    public function destroy(News $news): Response
    {
        $news->delete();

        return response()->json(null, 204);
    }
}
