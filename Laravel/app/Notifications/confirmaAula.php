<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Lesson;
use App\User;

class confirmaAula extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(User $user, Lesson $lesson, String $mensagem)
    {
        $this->user = $user;
        $this->lesson = $lesson;
        $this->mensagem = $mensagem;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $user = $notifiable;
        return (new MailMessage)
                    ->greeting('Sua aula foi confirmada!')
                    ->line('Olá '.$user->name.' este é um email de confirmação pra sua aula!')
                    ->line('Não esqueça! A sua aula de '.$this->lesson->subject_name.' é daqui a '.$this->mensagem.' dias')
                    ->action('Voltar ao app', url('localhost:8100/login'))
                    ->line('Boa Aula!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
