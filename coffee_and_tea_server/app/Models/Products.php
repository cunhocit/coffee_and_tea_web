<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $table = 'product';
    protected $primaryKey = 'id';
    protected $fillable = [
        'category',
        'name',
        'image',
        'description',
        'quantity',
        'price',
        'discount_percentage',
        'end_date',
        'turn_order',
    ];
}
