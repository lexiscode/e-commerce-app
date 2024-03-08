<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = new User;

        $user->name = 'Lexis User';
        $user->email = 'user@gmail.com';
        $user->password = '$2y$10$xBQ9Lt8yAms6dPopeAULNeE72NQ5f2HVuXMYeot/dfHvcQ6o2IwVC';

        $user->save();
    }
}

