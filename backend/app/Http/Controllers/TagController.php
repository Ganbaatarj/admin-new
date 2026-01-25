<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TagController extends Controller
{
    public function index(): Response
    {
        return response()->json(Tag::query()->latest()->get());
    }

    public function store(Request $request): Response
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'status' => ['required', 'in:draft,published']
        ]);

        return response()->json(Tag::create($data), 201);
    }

    public function show(Tag $tag): Response
    {
        return response()->json($tag);
    }

    public function update(Request $request, Tag $tag): Response
    {
        $data = $request->validate([
            'name' => ['sometimes', 'required', 'string', 'max:120'],
            'status' => ['sometimes', 'required', 'in:draft,published']
        ]);

        $tag->update($data);

        return response()->json($tag);
    }

    public function destroy(Tag $tag): Response
    {
        $tag->delete();

        return response()->json(null, 204);
    }
}
