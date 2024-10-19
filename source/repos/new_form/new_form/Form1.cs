using System.Reflection.Emit;
using System.Windows.Forms;
using static System.Windows.Forms.DataFormats;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace new_form
{

    public partial class Form1 : Form
    {
        private int operationCount = 0;
        private int result;
        private string operName;

        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e) //кнопка для сложения
                                                               //1-ый способ для перед. данных
        {
            try
            {
                if (!int.TryParse(textBox1.Text, out int value1) || !int.TryParse(textBox2.Text, out int value2))
                {
                    MessageBox.Show("Введите корректные числа!");
                    return;
                }

                result = value1 + value2;
                operationCount++;
                operName = "Сложение";

                Form2 form = new Form2(result, operationCount, operName);

                form.ShowDialog();

                label4.Text = $"Результат: {result}\nОперации: {operationCount}";


            }
            catch (Exception ex)
            {
                MessageBox.Show($"Произошла ошибка: {ex.Message}");
            }
        }

        public void IncrementOperationCount()
        {
            operationCount++;
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            try
            {
                if (!int.TryParse(textBox1.Text, out int value1) || !int.TryParse(textBox2.Text, out int value2))
                {
                    MessageBox.Show("Введите корректные числа!");
                    return;
                }

                result = value1 - value2;

                operationCount++;

                operName = "Вычитание";

                Form2 form = new Form2(result, operationCount, operName);
                form.ShowDialog();

                label4.Text = $"Результат: {result}\nОперации: {operationCount}";


            }
            catch (Exception ex)
            {
                MessageBox.Show($"Произошла ошибка: {ex.Message}");
            }
        }

        private void button3_Click(object sender, EventArgs e)//6-й способ для перед. данных
        {
            try
            {
                if (!int.TryParse(textBox1.Text, out int baseNumber) ||
                    !int.TryParse(textBox2.Text, out int exponent))
                {
                    MessageBox.Show("Введите корректные числа!");
                    return;
                }

                Data.Result = Power(baseNumber, exponent);
                operationCount++;
                Data.operName = "Возведение в степень";


                Form2 form = new Form2(Data.Result, operationCount, Data.operName);
                form.ShowDialog();

                label4.Text = $"Результат: {Data.Result}\nОперации: {operationCount}";

            }
            catch (Exception ex)
            {
                MessageBox.Show($"Произошла ошибка: {ex.Message}");
            }
        }

        private int Power(int baseNumber, int exponent)
        {
            return (int)Math.Pow(baseNumber, exponent);
        }

        static class Data //добавление класса для использования второго способа
                          //передачи данных между формами (это 6-ой метод)
        {
            public static int Result { get; set; }
            public static int OperationCount { get; set; }
            public static string operName { get; set; }
        }

        public void button4_Click(object sender, EventArgs e) //кнопка для сравнения
        {
            try
            {
                if (!int.TryParse(textBox1.Text, out int number1) ||
                    !int.TryParse(textBox2.Text, out int number2))
                {
                    MessageBox.Show("Введите корректные числа!");
                    return;
                }

                if (number1 > number2) //использование 2-ого способа для передачи данных между формами
                {
                    label4.Text = $"Число {number1} больше числа {number2}\n Операции: {operationCount + 1}";
                    operationCount++;
                    operName = "сравнение";
                    Form2 form = new Form2(result, operationCount, operName);
                    form.Data2 = $"Число {number1} больше числа {number2}";
                    form.ShowDialog();
                }
                else if (number1 < number2)
                {
                    label4.Text = $"Число {number1} меньше числа {number2}\n Операции: {operationCount + 1}";
                    operationCount++;
                    operName = "сравнение";
                    Form2 form = new Form2(result, operationCount, operName);
                    form.Data2 = $"Число {number1} меньше числа {number2}";
                    form.ShowDialog();
                }
                else
                {
                    label4.Text = $"Числа {number1} и {number2} равны\n Операции: {operationCount + 1}";
                    operationCount++;
                    operName = "сравнение";
                    Form2 form = new Form2(result, operationCount, operName);
                    form.Data2 = $"Числа {number1} и {number2} равны";
                    form.ShowDialog();
                }

                 

                
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Произошла ошибка: {ex.Message}");
            }
        }
    }
    
    


}

//счётчик только по кнопке ок
