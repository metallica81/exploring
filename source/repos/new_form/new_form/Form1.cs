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

        private void button1_Click(object sender, EventArgs e) //������ ��� ��������
                                                               //1-�� ������ ��� �����. ������
        {
            try
            {
                if (!int.TryParse(textBox1.Text, out int value1) || !int.TryParse(textBox2.Text, out int value2))
                {
                    MessageBox.Show("������� ���������� �����!");
                    return;
                }

                result = value1 + value2;
                operationCount++;
                operName = "��������";

                Form2 form = new Form2(result, operationCount, operName);

                form.ShowDialog();

                label4.Text = $"���������: {result}\n��������: {operationCount}";


            }
            catch (Exception ex)
            {
                MessageBox.Show($"��������� ������: {ex.Message}");
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
                    MessageBox.Show("������� ���������� �����!");
                    return;
                }

                result = value1 - value2;

                operationCount++;

                operName = "���������";

                Form2 form = new Form2(result, operationCount, operName);
                form.ShowDialog();

                label4.Text = $"���������: {result}\n��������: {operationCount}";


            }
            catch (Exception ex)
            {
                MessageBox.Show($"��������� ������: {ex.Message}");
            }
        }

        private void button3_Click(object sender, EventArgs e)//6-� ������ ��� �����. ������
        {
            try
            {
                if (!int.TryParse(textBox1.Text, out int baseNumber) ||
                    !int.TryParse(textBox2.Text, out int exponent))
                {
                    MessageBox.Show("������� ���������� �����!");
                    return;
                }

                Data.Result = Power(baseNumber, exponent);
                operationCount++;
                Data.operName = "���������� � �������";


                Form2 form = new Form2(Data.Result, operationCount, Data.operName);
                form.ShowDialog();

                label4.Text = $"���������: {Data.Result}\n��������: {operationCount}";

            }
            catch (Exception ex)
            {
                MessageBox.Show($"��������� ������: {ex.Message}");
            }
        }

        private int Power(int baseNumber, int exponent)
        {
            return (int)Math.Pow(baseNumber, exponent);
        }

        static class Data //���������� ������ ��� ������������� ������� �������
                          //�������� ������ ����� ������� (��� 6-�� �����)
        {
            public static int Result { get; set; }
            public static int OperationCount { get; set; }
            public static string operName { get; set; }
        }

        public void button4_Click(object sender, EventArgs e) //������ ��� ���������
        {
            try
            {
                if (!int.TryParse(textBox1.Text, out int number1) ||
                    !int.TryParse(textBox2.Text, out int number2))
                {
                    MessageBox.Show("������� ���������� �����!");
                    return;
                }

                if (number1 > number2) //������������� 2-��� ������� ��� �������� ������ ����� �������
                {
                    label4.Text = $"����� {number1} ������ ����� {number2}\n ��������: {operationCount + 1}";
                    operationCount++;
                    operName = "���������";
                    Form2 form = new Form2(result, operationCount, operName);
                    form.Data2 = $"����� {number1} ������ ����� {number2}";
                    form.ShowDialog();
                }
                else if (number1 < number2)
                {
                    label4.Text = $"����� {number1} ������ ����� {number2}\n ��������: {operationCount + 1}";
                    operationCount++;
                    operName = "���������";
                    Form2 form = new Form2(result, operationCount, operName);
                    form.Data2 = $"����� {number1} ������ ����� {number2}";
                    form.ShowDialog();
                }
                else
                {
                    label4.Text = $"����� {number1} � {number2} �����\n ��������: {operationCount + 1}";
                    operationCount++;
                    operName = "���������";
                    Form2 form = new Form2(result, operationCount, operName);
                    form.Data2 = $"����� {number1} � {number2} �����";
                    form.ShowDialog();
                }

                 

                
            }
            catch (Exception ex)
            {
                MessageBox.Show($"��������� ������: {ex.Message}");
            }
        }
    }
    
    


}

//������� ������ �� ������ ��
